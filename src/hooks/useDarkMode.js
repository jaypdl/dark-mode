import useLocalStorage from './useLocalStorage';

function useDarkMode() {
  const [darkModeOn, setDarkModeOn] = useLocalStorage('darkMode')

  return [darkModeOn, setDarkModeOn]
}

export default useDarkMode;