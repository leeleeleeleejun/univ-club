'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { FilterType } from '@/types/club';
import { useState } from 'react';
import { campusTextColor } from '@/constants/color';

export default function DropDown({
  onFilterAction,
}: {
  onFilterAction: (filterType: FilterType, value: string) => void;
}) {
  const [campus, setCampus] = useState('전체');

  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <span className={`mr-1 ${campusTextColor[campus]}`}>{campus}</span>
          캠퍼스
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem
          key='전체'
          onPress={() => {
            onFilterAction('campus', '');
            setCampus('전체');
          }}
        >
          전체
        </DropdownItem>
        <DropdownItem
          key='신관캠'
          onPress={() => {
            onFilterAction('campus', '신관캠');
            setCampus('신관');
          }}
        >
          신관캠
        </DropdownItem>
        <DropdownItem
          key='천안캠'
          onPress={() => {
            onFilterAction('campus', '천안캠');
            setCampus('천안');
          }}
        >
          천안캠
        </DropdownItem>
        <DropdownItem
          key='예산캠'
          onPress={() => {
            onFilterAction('campus', '예산캠');
            setCampus('예산');
          }}
        >
          예산캠
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
