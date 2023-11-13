<x-mail::message>
# Order confirmation

Order confirmed!

Your order for a total of {{ $order->total_price }}€ is confirmed. 

Thanks for you purchased,<br>
{{ config('app.name') }}
</x-mail::message>
