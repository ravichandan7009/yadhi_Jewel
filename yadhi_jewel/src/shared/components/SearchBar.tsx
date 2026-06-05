import {forwardRef} from 'react';
interface SearchBarProps {
    value : string,
    onChange : (value: string) => void
}
const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({ value, onChange }, ref) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search ornaments..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                ref={ref}
            />
        </div>
    );
});
export default SearchBar;