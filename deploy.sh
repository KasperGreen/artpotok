#!/bin/sh

git pull
yarn build
mkdir -p production
cp -R build/* production/
