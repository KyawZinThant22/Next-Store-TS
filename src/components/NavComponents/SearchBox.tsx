import * as Form from '@radix-ui/react-form';
import { SearchIcon } from 'assets/icons';
const SearchBox = () => {
   return (
      <Form.Root className="relative  text-sm">
         <Form.Field name="search">
            <input
               type="text"
               placeholder="Search Product"
               className="w-[200px] rounded-full border p-1.5 px-4 py-2 focus:border-blue-400 lg:w-[300px]"
            />

            <SearchIcon className="absolute right-6 top-2" />
         </Form.Field>
      </Form.Root>
   );
};

export default SearchBox;
