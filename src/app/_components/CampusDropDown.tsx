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

interface CampusOption {
  value: string;
  label: string;
  shortLabel: string;
}

const campusOptions: CampusOption[] = [
  { value: '', label: '전체', shortLabel: '전체' },
  { value: '신관캠', label: '신관캠', shortLabel: '신관' },
  { value: '천안캠', label: '천안캠', shortLabel: '천안' },
  { value: '예산캠', label: '예산캠', shortLabel: '예산' },
];

export default function CampusDropDown({
  onFilterAction,
}: {
  onFilterAction: (filterType: FilterType, value: string) => void;
}) {
  const [selectedCampus, setSelectedCampus] = useState<CampusOption>(
    campusOptions[0]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <span
            className={`mr-1 ${campusTextColor[selectedCampus.shortLabel]}`}
          >
            {selectedCampus.shortLabel}
          </span>
          캠퍼스
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Campus Selection'>
        {campusOptions.map((option) => (
          <DropdownItem
            key={option.value}
            onPress={() => {
              onFilterAction('campus', option.value);
              setSelectedCampus(option);
            }}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
