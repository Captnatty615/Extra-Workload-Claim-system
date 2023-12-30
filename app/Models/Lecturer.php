<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    
    use HasFactory;

    protected $fillable = ['first_name', 'last_name', 'academic_rank', 'department'];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

}