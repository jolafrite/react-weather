import React, { useState, ChangeEvent, FormEvent, memo } from "react";
import { useStyles } from "./style";
import { IconButton, CircularProgress, InputBase } from "@material-ui/core";
import { Search } from '@material-ui/icons';

export interface IWeatherSearchFormProps {
  loading: boolean;
  onSubmit: (query: string) => void;
}

const WeatherSearchForm: React.FC<IWeatherSearchFormProps> = props => {
  const classes = useStyles();
  const { loading, onSubmit } = props;
  const [query, setQuery] = useState('');

  const validate = (query: string): { [field:string]: boolean } => {
    return {
      'query': query.trim().length < 3,
    };
  }
  const validation = validate(query);
  const isInvalid = Object.keys(validation).some(field => validation[field]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isInvalid) return;
    onSubmit(query);
  }

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit}
      className={classes.root}
    >
      <InputBase
        data-testid="input"
        className={classes.input}
        placeholder="Enter the city name"
        autoFocus={true}
        inputProps={{
          'aria-label': 'Enter the city name'
        }}
        value={query}
        onChange={handleChange}
      />

      <IconButton
        data-testid="submit"
        type="submit"
        className={classes.iconButton}
        aria-label="Search"
        disabled={isInvalid}
      >
        {!loading
          ? <Search />
          : <CircularProgress
              size={24}
              className={classes.progress}
            />
        }
      </IconButton>
    </form>
  )
};

export default memo(WeatherSearchForm);
