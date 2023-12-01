<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail;

class ContactController extends Controller
{
    public function contact(Request $request)
    {
        return Inertia::render("ContactPage");
    }

    public function sendEmail(Request $request)
    {
        $email = $request->email;
        $subject = $request->email;
        $message = $request->message;
        Mail::to('support@jerseyshop.com')->send(new ContactEmail($email, $subject, $message));

        return redirect('/contact-confirmation');
    }

    public function contactConfirmation()
    {
        return Inertia::render("ContactConfirmation");
    }
}
