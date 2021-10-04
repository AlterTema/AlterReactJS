import React from "react";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';



export const Button = ({ children }) => {
  return (
    <div className="my-button" role="button">
      {children('AlterTema')}
    </div>
  );
};