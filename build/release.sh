#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  echo "Building $VERSION ..."
  VERSION=$VERSION npm run pub

  # build theme
  echo "Building theme-default $VERSION ..."
  cd packages/theme-default
  VERSION=$VERSION npm run build
  cd ../..

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push vue-ui master
  git push vue-ui refs/tags/v$VERSION

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
