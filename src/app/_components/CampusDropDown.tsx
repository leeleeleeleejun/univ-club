'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { FilterType } from '@/types/club';
import { campusTextColor } from '@/constants/color';

const campusOptions = ['', '신관캠', '천안캠', '예산캠'];

export default function CampusDropDown({
  onFilterAction,
  activeCampus,
}: {
  onFilterAction: (filterType: FilterType, value: string) => void;
  activeCampus: string;
}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <span className={`mr-1 ${campusTextColor[activeCampus]}`}>
            {activeCampus.slice(0, 2) || '전체'}
          </span>
          캠퍼스
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Campus Selection'>
        {campusOptions.map((option) => (
          <DropdownItem
            key={option}
            onPress={() => {
              onFilterAction('campus', option);
              // setSelectedCampus(option);
            }}
          >
            {option || '전체'}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
