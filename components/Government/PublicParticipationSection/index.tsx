import React from 'react';
import { Calendar, Users, CheckCircle } from 'lucide-react';
import { PublicParticipation } from '../types';

interface PublicParticipationSectionProps {
  participation: PublicParticipation;
}

export const PublicParticipationSection: React.FC<PublicParticipationSectionProps> = ({ participation }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-blue-900" />
          <h3 className="text-lg font-semibold text-blue-900">Upcoming Sessions</h3>
        </div>
        <div className="space-y-4">
          {participation.upcomingSessions.map((session, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <div className="font-medium">{session.topic}</div>
              <div className="text-sm text-gray-600">
                {session.date} at {session.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="text-blue-900" />
          <h3 className="text-lg font-semibold text-blue-900">Past Feedback</h3>
        </div>
        <div className="space-y-4">
          {participation.pastFeedback.map((feedback, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <div className="font-medium">{feedback.topic}</div>
              <div className="text-sm text-gray-600 mt-1">{feedback.summary}</div>
              <div className="text-sm text-blue-900 mt-1">Outcome: {feedback.outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};