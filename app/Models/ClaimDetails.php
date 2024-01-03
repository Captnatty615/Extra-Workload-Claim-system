<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimDetails extends Model
{
    use HasFactory;
    protected $table = 'claimdetails';
    protected $fillable = [
        'faculty',
        'claim_department',
        'module_code',
        'lecture_hours',
        'tutorial_hours',
        'area',
        'day',
    ];
}
