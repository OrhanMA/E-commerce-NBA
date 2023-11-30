{{-- This file is used for menu items by any Backpack v6 theme --}}
{{-- <li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li> --}}

<x-backpack::menu-item title="Categories"  :link="backpack_url('category')" />
<x-backpack::menu-item title="Delivery methods"  :link="backpack_url('delivery-method')" />
<x-backpack::menu-item title="Orders"  :link="backpack_url('order')" />
<x-backpack::menu-item title="Order products"  :link="backpack_url('order-product')" />
<x-backpack::menu-item title="Paiement methods"  :link="backpack_url('paiement-method')" />
<x-backpack::menu-item title="Products"  :link="backpack_url('product')" />
<x-backpack::menu-item title="Subcategories"  :link="backpack_url('subcategory')" />
<x-backpack::menu-item title="Users"  :link="backpack_url('user')" />
<x-backpack::menu-item title="Tags"  :link="backpack_url('tag')" />