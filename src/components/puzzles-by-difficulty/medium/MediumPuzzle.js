import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetMediumPuzzle = () => {

        return axios
          .get("https://omega2020.herokuapp.com/puzzle/moderate")
          .then(res => {
            return res.data;
          })
          .catch(err => console.log(err.response));
};
