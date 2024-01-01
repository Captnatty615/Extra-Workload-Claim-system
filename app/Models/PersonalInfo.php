<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfo extends Model
{
    use HasFactory;
    protected $table = 'personalInfo';
    protected $fillable = [
        'firstName',
        'lastName',
        'academicRank',
        'department',
    ];
}
