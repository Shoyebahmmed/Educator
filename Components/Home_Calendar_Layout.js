import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function CustomCalendar() {
  const today = new Date();
  const todayDate = moment().toDate(); // Convert moment object to Date object
  const [selectedDate, setSelectedDate] = useState(todayDate);

  const twoDaysAgo = moment().subtract(2, 'days').toDate();
  const twoDaysLater = moment().add(2, 'days').toDate();

  const customDatesStyles = date => {
    const isToday = moment(date).isSame(moment(todayDate), 'day');
    
    return {
      dateContainerStyle: {
        backgroundColor: isToday ? '#FFE7B7' : '#F2EFFF', // Use different color for todayDate
        borderRadius: 50,
        justifyContent: 'center', // Center the date vertically within the circle
        alignItems: 'center', // Center the date horizontally within the circle
        width: isToday? 60 : 40, // Set the width and height of the circle
        height: isToday? 60 : 40, 
      },
      dateNumberStyle: {
        color: isToday ? '#FB6D00' : '#A4A5FD', // Use different text color for todayDate
        fontSize: isToday ? 24 : 18,
      },
    };
  };
  

  return (
    <View style={styles.container}>
      {/* Header row */}
      <View style={styles.header}>
        <Text style={styles.dateStyle}>{moment(today).format('D MMMM YYYY')}</Text>
      </View>

      {/* Calendar strip */}
      <View style={{ pointerEvents: 'none' }}>
        <CalendarStrip
          customDatesStyles={customDatesStyles}
          style={styles.calendar}
          calendarHeaderStyle={{ color: 'black' }}
          calendarColor={'white'}
          dateNumberStyle={{ color: 'black' }}
          dateNameStyle={{ display: 'none' }}
          onDateSelected={(date) => setSelectedDate(date)}
          startingDate={twoDaysAgo}
          minDate={twoDaysAgo}
          maxDate={twoDaysLater}
          showMonth={false}
          useIsoWeekday={false}
          iconLeft={null}
          iconRight={null}
          maxDayComponentSize={35}
          numDaysInWeek={5}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 432,
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
