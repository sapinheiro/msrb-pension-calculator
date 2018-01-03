#!/bin/bash
# Test script to seed db

NODE_ENV=test sequelize db:drop &&
NODE_ENV=test sequelize db:create &&
NODE_ENV=test sequelize db:migrate &&
NODE_ENV=test sequelize db:seed:all
