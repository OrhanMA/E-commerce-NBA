<x-mail::message>
# Introduction

Message received from: {{ $email }}

Subject: {{ $subject }}

Message: {{ $message }}


<br>
{{ config('app.name') }}
</x-mail::message>
