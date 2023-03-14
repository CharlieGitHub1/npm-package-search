import React, { useState } from "react";
import { useCustomTSselector } from "../hooks/useCustomTSselector";
import { useActions } from "../hooks/useActions";

import styled from "styled-components";

const UserSearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 960px;
  width: 100%;
  flex-direction: column;
  /* margin: 25px; */
  /* padding: 15px 10px; */
`;
const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  max-width: 275px;
  width: 100%;
  padding: 5px auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 275px;
    width: 100%;
    padding: 5px auto;
    margin: 10px 0;
    border: 1px solid #a0a0a0;
    border-radius: 4px;
    color: #121127;
    font-size: 1rem;
    width: 350px;
    padding: 10px 10px;
  }

  input {
    width: 350px;
    padding: 10px 10px;
    font-size: 1rem;
    color: #121127;
    margin: 5px 0;
    border-radius: 4px;
    background: transparent;
    border: 1px solid #a0a0a0;

    &:focus {
      outline: none;
      border: 1px solid rgba(65, 28, 255, 1);
    }

    &::placeholder {
      color: #a0a0a0;
      opacity: 0.8;
    }
  }
`;
const FoundUser = styled.h6`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 275px;
  width: 100%;
  padding: 10px auto;
  margin: 5px 0;
  text-transform: uppercase;
  background: #121127;
  color: #0ff;
  font-size: 1rem;
  font-weight: semi-bold;
`;

const FoundUserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  max-width: 275px;
  width: 100%;
  padding: 5px auto;
  margin: 10px 0;
  border: 1px solid rgba(130, 135, 135, 0.5);
  box-shadow: 2px 4px 3px rgba(130, 135, 135, 0.3);
  border-radius: 4px;
  color: #121127;
  font-size: 1rem;
  width: 350px;
  padding: 10px 10px;
`;

const Spacer = styled.div`
  height: 1rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  color: rgba(130, 135, 135, 1);
  margin: 20px 0 0 0;
  padding: 1px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  button {
    padding: 10px 50px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    background: #121127;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #fff;

    &:hover {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      background: transparent;
      color: rgba(65, 28, 255, 1);
      border: 1px solid rgba(65, 28, 255, 1);
    }
  }
`;
const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { repoSearch } = useActions();
  const { data, error, loading } = useCustomTSselector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    repoSearch(term);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <UserSearchContainer>
          <SearchInputContainer>
            <LabelWrapper>NPM Package Name</LabelWrapper>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search..."
            />
            <Spacer />
            <ButtonWrapper>
              <button>Search</button>
            </ButtonWrapper>
          </SearchInputContainer>
          <Spacer />
        </UserSearchContainer>
      </form>
      <FoundUserListContainer>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
      </FoundUserListContainer>
    </>
  );
};

export default RepoList;
