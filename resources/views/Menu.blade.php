
@foreach($items as $item)

    @if($item->children->count())
    <li class="nav-item dropdown">
        <a target="{{ $item->target }}" href="{{$item->link()}}" data-toggle="dropdown" class="dropdown-toggle nav-link">{{ $item->title }}</a>
       @elseif($item->children==true)

        <li class="nav-item active"><a  href="{{ $item->link()}}" class="nav-link">{{ $item->title }}
            </a>
            @endif
        @if($item->children->count())
            <ul role="menuitem" >
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                @foreach($item->children as $subItem)
                    <li>
                        <a class="dropdown-item" target="{{ $subItem->target }}" href="{{ $subItem->link()}}">{{ $subItem->title }}</a></li>

                @endforeach
                </div>
            </ul>
        @endif
    </li>
@endforeach
