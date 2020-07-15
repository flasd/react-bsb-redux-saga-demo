import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from './actions';
import styles from './css/styles.module.css';

export default function App() {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.text);
  const suggestions = useSelector((state) => state.suggestions);

  const handleKeyPress = useCallback(
    (event) => {
      dispatch(changeText(event.target.value));
    },
    [dispatch],
  );

  return (
    <div className="App">
      <div className={styles.inputContainer}>
        <input
          placeholder="Digite algo..."
          onChange={handleKeyPress}
          value={text}
        />
        {!!suggestions.length && (
          <ul className={styles.results}>
            {suggestions.map((suggestion) => (
              <li className={styles.result}>{suggestion}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
