import {Component} from 'react';
import Moment from 'moment/moment';

const LOCALE: string = 'en';
const FORMAT: string = 'DD/MM/YY hh:mm';

class DateTimeUtils extends Component {
  static getFormatDate(date: string) {
    Moment.locale(LOCALE);
    return Moment(date).format(FORMAT);
  }
}

export default DateTimeUtils;
