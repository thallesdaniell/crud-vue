<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::resource('tasks', 'TaskController')
    ->except(['create', 'edit']);
