<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Claim extends Model
{
    use HasFactory;

    protected $fillable = ['claimId', 'status', 'amount'];

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class, 'claimId');
    }
}
