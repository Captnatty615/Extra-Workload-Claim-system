<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Claims extends Model
{
    use HasFactory;
    protected $table = 'personalinfo';
    protected $fillable = [
        'firstName',
        'lastName',
        'academicRank',
        'department',
        'faculty',
        'claim_department',
        'module_code',
        'lecture_hours',
        'tutorial_hours',
        'area',
        'day',
    ];
}
