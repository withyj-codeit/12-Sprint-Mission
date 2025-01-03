import { useState } from "react"

// Generic Dropdown Props 정의
interface DropdownProps<T> {
  options: T[]; // Dropdown 항목 리스트
  labelKey: keyof T; // 표시할 라벨 속성
  valueKey: keyof T; // 값으로 사용할 속성
  selectedOption: T; // 선택된 항목
  onSelect: (option: T) => void; // 선택 시 호출되는 함수
}

export const Dropdown = <T extends Record<string, string | number>>({ // T는 key는 string, value는 string | number인 객체로 제한, Dropdown에 각각의 option이 T에 해당
  options,
  labelKey,
  valueKey,
  selectedOption,
  onSelect,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (option: T) => {
    onSelect(option);
    setOpen(false);
    alert(`Value는 ${option[valueKey]} 설정합니다.`);
  }

  return (
    <div onClick={() => setOpen((prev) => !prev)}>
      <div style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}>
        {selectedOption[labelKey]}
      </div>
      {open && (
        <div style={{ position: 'absolute', backgroundColor: 'gray', cursor: 'pointer' }}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(event) => {
                event.stopPropagation();
                handleSelect(option);
              }}
            >
              {String(option[labelKey])}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
