#!/bin/bash
for i in $( gem list --local --no-version | grep cocoapods );
do
    gem uninstall $i;
done