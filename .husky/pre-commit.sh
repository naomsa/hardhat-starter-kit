#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn prettier && yarn lint