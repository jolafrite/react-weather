import React, { useState, ChangeEvent, FormEvent, memo } from "react";
import { useStyles } from "./style";
import { IconButton, InputBase, CircularProgress } from "@material-ui/core";
import { Search } from '@material-ui/icons';

export interface IWeatherSearchFormProps {
  loading: boolean;
  onSubmit: (query: string) => void;
}

const WeatherSearchForm: React.FC<IWeatherSearchFormProps> = props => {
  const classes = useStyles();
  const { loading, onSubmit } = props;
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
  }

  const disableButton = query.trim() === '' || loading;

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
    >
      <InputBase
        className={classes.input}
        placeholder="Enter the city name"
        inputProps={{ 'aria-label': 'Enter the city name' }}
        required
        value={query}
        onChange={handleChange}
      />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="Search"
        disabled={disableButton}
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
