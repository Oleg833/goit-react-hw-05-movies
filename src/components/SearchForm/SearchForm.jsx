import { useState } from 'react';
import { FormDiv, Form, Input, Button } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Enter your query!');
    }

    onSubmit(query);
    setQuery('');
    e.target.reset();
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={query} onChange={onChange} />
          <Button type="submit">search</Button>
        </Form>
      </FormDiv>
    </>
  );
};

export default SearchForm;
