import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function HOme_Calendar_Mobile_View() {
  const today = new Date();
  const todayDate = moment().toDate(); // Convert moment object to Date object
  const [selectedDate, setSelectedDate] = useState(todayDate);

  const twoDaysAgo = moment().subtract(2, 'days').toDate();
  const twoDaysLater = moment().add(2, 'days').toDate();

  const customDatesStyles = date => {
    const isToday = moment(date).isSame(moment(todayDate), 'day');

    return {
      dateContainerStyle: {
        backgroundColor: isToday ? 'black' : null, // Use different color for todayDate
        borderRadius: 25,
        justifyContent: 'center', // Center the date vertically within the circle
        alignItems: 'center', // Center the date horizontally within the circle
        width: isToday ? 42 : 42, // Set the width and height of the circle
        height: isToday ? 73 : 73,
        paddingVertical: 20,
      },
      dateNumberStyle: {
        color: isToday ? '#fff' : 'black', // Use different text color for todayDate
        fontSize: isToday ? 18 : 12,
        paddingTop: 7,
      },
      dateNameStyle: {
        color: isToday ? '#fff' : 'black',
        fontSize: isToday ? 12 : 10,
        fontWeight: isToday ? 'bold' : null,
      }
    };
  };


  return (
    <View style={styles.container}>
      {/* Header row */}
      <View style={styles.header}>
        <Text style={styles.dateStyle}>{moment(today).format('MMMM YYYY')}</Text>
      </View>

      {/* Calendar strip */}
      <View style={{ pointerEvents: 'none' }}>
        <CalendarStrip
          customDatesStyles={customDatesStyles}
          style={styles.calendar}
          calendarHeaderStyle={{ color: 'black' }}
          calendarColor={'white'}
          dateNumberStyle={{ color: 'black' }}
          dateNameStyle={{ color: '#fff' }}
          onDateSelected={(date) => setSelectedDate(date)}
          maxDate={twoDaysLater}
          showMonth={false}
          useIsoWeekday={false}
          iconLeft={null}
          iconRight={null}
          maxDayComponentSize={35}
          numDaysInWeek={6}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  dateStyle: {
    fontWeight: '600',
    fontSize: 18,
  },
  calendar: {
    height: 100,
  },
});
