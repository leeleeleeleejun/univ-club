'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>캠퍼스</button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='new'>신관캠</DropdownItem>
        <DropdownItem key='copy'>천안캠</DropdownItem>
        <DropdownItem key='edit'>예산캠</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
