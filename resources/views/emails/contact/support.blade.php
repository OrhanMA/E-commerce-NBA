<x-mail::message>

Message received from: {{ $email }}

Subject: {{ $subject }}

Message: {{ $message }}


<br>
{{ config('app.name') }}
</x-mail::message>
