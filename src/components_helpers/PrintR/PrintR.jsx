import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PrintR.css'

export default class PrintR extends Component {
  render () {
    const {
      props: {
        title
      },
      cookObject
    } = this
    return (
      <section className='PrintR'>
        <h2>{title}</h2>
        <style
          dangerouslySetInnerHTML={{
            __html: ``
          }}
        />
        <pre
          dangerouslySetInnerHTML={
            {__html: cookObject()}
          }
        />
      </section>)
  }

  cookObject = () => {
    const {
      props: {
        object
      },
      syntaxHighlight
    } = this

    return syntaxHighlight(
      JSON.stringify(
        object, undefined, 4
      )
    )
  }

  syntaxHighlight = (json) => {
    if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2)
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    })
  }

  static defaultProps = {
    title: 'Вывод объекта',
  }

  static propTypes = {
    object: PropTypes.object.isRequired,
    title: PropTypes.node
  }

}
