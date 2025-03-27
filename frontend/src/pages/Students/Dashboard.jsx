// StudentDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Announcement from './Announcement';
import { StudentDashboardContainer, Content, Section, SectionTitle, CardContainer, Card, CardTitle, CardContent, BottomContent } 
from '../../styles/DashboardStyles';

const StudentDashboard = () => {
  //const [isOpen, setIsOpen] = useState(true);
    //const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
    //const [studentPerformance, setStudentPerformance] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [announcementCount, setAnnouncementCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  
  useEffect(() => {

  const fetchStudentCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/students/count");
      setStudentCount(response.data.count);
    } catch (error) {
      console.error("Error fetching student count:", error);
    }
  };

  // Fetch announcements count
  const fetchAnnouncementCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/announcements/count");
      setAnnouncementCount(response.data.count);
    } catch (error) {
      console.error("Error fetching announcements count:", error);
    }
  };

  // Fetch events count
  const fetchEventCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/events/count");
      setEventCount(response.data.count);
    } catch (error) {
      console.error("Error fetching events count:", error);
    }
  };
  
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
        setAnnouncements(response.data.announcements || []);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchStudentCount();
    fetchAnnouncementCount();
    fetchAnnouncements();
    fetchEventCount();
  }, []);

  return (
    <StudentDashboardContainer>
      <Sidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Students</CardTitle>
              <CardContent>{studentCount}</CardContent>
            </Card>
            <Card>
              <CardTitle>Announcements</CardTitle>
              <CardContent>{announcementCount}</CardContent>
            </Card>
            <Card>
              <CardTitle>Events</CardTitle>
              <CardContent>{eventCount}</CardContent>
            </Card>
          </CardContainer>
        </Section>

        {/* <Section>
          <SectionTitle>Announcements</SectionTitle> */}
          {/* <Performance studentPerformance={studentPerformance} /> */}
          {/* <Announcement announcements={announcements} /> */}
          {/* Add a list of recent activity items */}
        {/* </Section> */}

        <BottomContent>
          {/* <Performance studentPerformance={studentPerformance} /> */}
          <Announcement announcements={announcements} />
        </BottomContent>

        {/* <Section> */}
          {/* <SectionTitle>Upcoming Events</SectionTitle> */}
          {/* Add a calendar or list of upcoming events */}
        {/* </Section> */}

        {/* Add more sections for other parts of the admin dashboard */}
      </Content>
    </StudentDashboardContainer> 
  );
};

export default StudentDashboard;
