// TeacherDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { TeacherDashboardContainer, Content, Section, SectionTitle, CardContainer, Card, CardTitle, CardContent } 
from '../../styles/DashboardStyles';

const TeacherDashboard = () => {

  const [announcementCount, setAnnouncementCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {

    // Fetch announcements count
    const fetchAnnouncementCount = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/announcements/count');
        setAnnouncementCount(response.data.count);
      } catch (error) {
        console.error("Error fetching announcements count:", error);
      }
    };

    // Fetch students count
  const fetchStudentCount = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/count');
      setStudentCount(response.data.count);
    } catch (error) {
      console.error("Error fetching students count:", error);
    }
  };

  // Fetch events count
  const fetchEventCount = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/count');
      setEventCount(response.data.count);
    } catch (error) {
      console.error("Error fetching events count:", error);
    }
  };
    fetchAnnouncementCount();
    fetchEventCount();
    fetchStudentCount();
  }, []);
  return (
    <TeacherDashboardContainer>
      <Sidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Announcements</CardTitle>
              <CardContent>{announcementCount}</CardContent>
            </Card>
            <Card>
              <CardTitle>Students</CardTitle>
              <CardContent>{studentCount}</CardContent>
            </Card>
            <Card>
              <CardTitle>Events</CardTitle>
              <CardContent>{eventCount}</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Announcements</SectionTitle>
          {/* Add a list of recent activity items */}
        </Section>

        {/* <Section>
          <SectionTitle>Upcoming Events</SectionTitle> */}
          {/* Add a calendar or list of upcoming events */}
        {/* </Section> */}

        {/* Add more sections for other parts of the admin dashboard */}
      </Content>
    </TeacherDashboardContainer>
  );
};

export default TeacherDashboard;
