#!/bin/sh

git pull
yarn
yarn build
mkdir -p production
cp -R build/* production/
