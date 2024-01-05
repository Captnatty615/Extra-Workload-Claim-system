<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClaimdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claimdetails', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('claimId');
            $table->foreign('claimId')->references('id')->on('lecturers');
            $table->string('faculty');
            $table->string('claim_department');
            $table->string('module_code');
            $table->unsignedDecimal('lecture_hours');
            $table->unsignedDecimal('tutorial_hours');
            $table->string('area');
            $table->string('day');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('claimdetails');
    }
}
