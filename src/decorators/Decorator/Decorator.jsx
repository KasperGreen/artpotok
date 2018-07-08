import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Decorator = (decorator_props) => {
  const Cook = new CookProps(decorator_props)
  return (
    Cook.please()
  )
}

class CookProps {

  constructor (props) {
    this.props = props

    this._saveChildrenProps()
        ._startFillResultProps()
        ._mergeClassNames()
        ._mergeStyles()
        ._mergeMethods()
  }

  childrenIsElement = () => {
    const {
      props: {
        children
      }
    } = this
    return React.isValidElement(children)
  }
  children_props = {}
  getChildren = () => {
    if (this.childrenIsElement()) {
      return React.Children.only(this.props.children)
    }
    else return false
  }
  props = {}

  _mergeClassNames () {
    const {
      props: {
        className
      },
      children_props: {
        className: children_className = ''
      } = {}
    } = this
    if (className || children_className) {
      this.result_props.className = _.trim(
        [
          className ? className : '',
          children_className ? children_className : ''
        ].join(' '))
    }
    return this

  }

  _mergeMethods () {

    _.each(this.children_props, (childrenMethod, method_name) => {
      if (_.isFunction(childrenMethod)) {
        if (_.isFunction(_.get(this.props, method_name))) {

          this.result_props[method_name] = (...params) => {

            this.props[method_name](...params)
            childrenMethod(...params)

          }
        }
      }
    })

    return this
  }

  _mergeStyles () {

    const {
      props: {
        style = {}
      },
      childrenIsElement,
      children_props
    } = this

    if (childrenIsElement()) {
      const {style: children_style = {}} = children_props
      this.result_props = {
        ...this.result_props,
        style: {
          ...style,
          ...children_style
        }
      }
    }
    else {
      this.result_props = {
        ...this.result_props,
        style
      }
    }

    return this
  }

  _saveChildrenProps () {

    const children = this.getChildren()

    this.children_props = children.props

    return this
  }

  _startFillResultProps () {

    const {
        default_element_type,
        ...props_without_decorator_options
      } = this.props,
      this_props_without_children = {
        ...props_without_decorator_options,
        children: undefined
      }

    this.result_props = {
      ...this_props_without_children,
      ...this.children_props
    }

    return this
  }

  please () {
    const {
      props: {
        children,
        default_element_type
      },
      result_props
    } = this

    if (this.childrenIsElement()) {
      return React.cloneElement(children, {...result_props})

    }
    else {
      return React.createElement(default_element_type, {...result_props}, children)
    }

  }

}

Decorator.defaultProps = {
  default_element_type: 'span'
}
Decorator.propTypes = {
  children: PropTypes.node.isRequired,
  default_element_type: PropTypes.string
}

export default Decorator
