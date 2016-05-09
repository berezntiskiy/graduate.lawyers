#!/usr/bin/env bash

mysql -u homestead -psecret < resetDatabase.sql
php artisan migrate
php artisan db:seed