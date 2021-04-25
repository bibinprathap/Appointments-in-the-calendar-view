 
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import {scale} from 'react-native-size-matters';
import moment from 'moment';
import ScreenComponent from './ScreenComponent';  
import logoImg from '../images/broke.png';
import colors from  '../../colors';

import {Actions, ActionConst} from 'react-native-router-flux';

// import PropTypes from 'prop-types';

const CalenderBookingScreen = (props) => {
  const [dateSeleced, setDateSeleced] = useState(moment().format('YYYY-MM-DD'));
  const [appointments, setAppointments] = useState([{
    serviceType:'9.30am - 10.30am',
    bookingDetails:'Walk in',
    client:'Haircut Beard'
  },
  {
    serviceType:'11.30am - 12.30am',
    bookingDetails:'Walk in',
    client:'Facial,pedicure,manicure'
  },
  {
    serviceType:'1.10pm - 2.30pm',
    bookingDetails:'Walk in',
    client:'Hair + Facial offer'
  } ]);

  const dateStart = moment().format('YYYY-MM-DD');
  const dateEnd = moment().add(30, 'days').format('YYYY-MM-DD');
  const dataBooking = props.navigation.getParam('params') || null;
  const onDateChanged = async (day) => {
    setAppointments([]);
  };
  const handleSelected = (al) => {
    setDateSeleced(moment(al).format('YYYY-MM-DD'));
  };
  useEffect(() => {
    let arrTime = [];
    dataBooking?.showTime.map((el) => {
      let elStr = el.replace(/ /g, '-');
      moment(elStr, 'YYYY-MM-DD, HH:ss')
        .format('YYYY-MM-DD, HH:ss')
        .split(', ')[0] == dateSeleced && arrTime.push(elStr);
      setAppointments(arrTime);
    });
  }, [dateSeleced]);
  const renderAppointments = () => {
    return (
      <View style={appointments.length !== 0 ? styles.vTimeShow : {}}>
        {appointments.length === 0 ? (
          <View style={styles.vEmpty}>
            <Image source={logoImg} style={styles.iconEmpty} />
            <Text style={styles.txtEmpty}>No booking</Text>
          </View>
        ) : (
          appointments.map((el, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.vTime}
                onPress={() =>{
                 
                }}>
                <Text style={styles.txtTime}>
               { el.serviceType}
                </Text>
                <Text style={styles.txtTime}>
               { el.bookingDetails}
                </Text>
                <Text style={styles.txtTime}>
               { el.client}
                </Text>
              </TouchableOpacity>
            );
          })
        )}
      </View>
    );
  };
  const marked = {};
  return (
    <ScreenComponent
      titleHeader={dataBooking?.name}
      back
      disableScrollView={true}
      renderView={
        <View style={styles.container}>

<CalendarProvider
                style={styles.calendar}
                date={dateStart}
                onDateChanged={onDateChanged}
                theme={{ todayButtonTextColor: '#349EFB' }}
                showTodayButton
                disabledOpacity={0.6}
            >
                <ExpandableCalendar
                    markedDates={marked}
                    calendarWidth={540}
                    hideExtraDays
                    pastScrollRange={12}
                    futureScrollRange={12}
                    calendarHeight={380}
                    theme={{
                        textDayFontSize: 14,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 14,
                        dotColor: '#665EFF',
                        selectedDotColor: '#FFFFFF',
                        disabledDotColor: '#f6eeee',
                        dotStyle: { marginTop: 2, width: 7, height: 4 },
                        'stylesheet.expandable.main': {
                            knob: {
                                width: 60,
                                height: 4,
                                borderRadius: 3,
                                backgroundColor: '#349EFB',
                            },
                        },
                    }}
                />
               <View>{renderAppointments()}</View>
               <TouchableOpacity onPress={() =>  Actions.BookingScreen()} style={styles.add}><Text style={{fontSize: 45, color: "white", fontWeight: "bold"}}>+</Text></TouchableOpacity>
            </CalendarProvider>

         
         
        </View>
      }
    />
  );
};

// CalenderBookingScreen.propTypes = {
//   params: PropTypes.object,
// };

// CalenderBookingScreen.defaultProps = {
//   params: {},
// };
export default CalenderBookingScreen;

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 2,
        paddingTop: 1,
        borderBottomWidth: 2,
        borderColor: '#eee',
    },
    add:{  borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:60,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      height:60,
      backgroundColor: "#03bafc",
      borderRadius:100},
  container: {
    flex: 1,
  },
  vEmpty: {
    alignItems: 'center',
    marginTop: scale(50),
  },
  iconEmpty: {
    width: scale(140),
    height: scale(140),
  },
  txtEmpty: {
    marginTop: scale(10),
    fontSize: 16,
    fontWeight: '500',
    color: colors.active,
  },
  txtTime: {
    fontWeight: '600',
    color: colors.grey,
  },
  vTime: {
    width:'100%',
    //height: scale(20),
    borderWidth: 0.3,
    borderColor: colors.greySeat,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.white,
    margin: scale(10),
    // marginTop : scale(5)
  },
  vTimeShow: {
    flexDirection: 'row',
  },
});