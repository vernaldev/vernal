import React, { useEffect } from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import { alertApiRef, identityApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export const WelcomeTitle = () => {
  const identityApi = useApi(identityApiRef);
  const alertApi = useApi(alertApiRef);

  // Define the function to determine the greeting based on the current time
  const getTimeBasedGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  // Get the time-based greeting
  const greeting = getTimeBasedGreeting();

  // Get the user's profile info
  const { value: profile, error } = useAsync(() => identityApi.getProfileInfo());

  // Alert on error when fetching user identity
  useEffect(() => {
    if (error) {
      alertApi.post({
        message: `Failed to load user identity: ${error}`,
        severity: 'error',
      });
    }
  }, [error, alertApi]);

  return (
    <Tooltip title="Your personalized greeting">
      <Typography component="span" variant="inherit">
        {`${greeting}${profile?.displayName ? `, ${profile.displayName}` : ''}!`}
      </Typography>
    </Tooltip>
  );
};
