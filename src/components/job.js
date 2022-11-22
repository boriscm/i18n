import React from "react";
import {FormattedDate} from 'react-intl';
import { FormattedMessage } from "react-intl";
import { FormattedNumber } from "react-intl";
import {FormattedPlural} from "react-intl"


const Job = (props) => {

  const show = navigator.language == "en";


  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td ><FormattedNumber value={props.offer.salary } style="currency" currency="USD" />  <FormattedPlural value={props.offer.salary} one={show ? "Milion": "Millón" } other={show ? "Milion": "Millones" } /></td>
      <td>{props.offer.city}</td>
      
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td><FormattedNumber value={props.offer.views} style="decimal"/></td>
    </tr>
  );
};

export default Job;
