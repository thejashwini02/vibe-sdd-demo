// Campus Event Registration Utility Functions

/**
 * Register for an event
 * @param {string} eventName - The name of the event
 * @param {string} userName - The name of the user registering
 * @returns {string} - Confirmation message
 */
function registerForEvent(eventName, userName) {
    return `User ${userName} has been registered for the event: ${eventName}`;
}

/**
 * Get list of registered participants
 * @param {string} eventName - The name of the event
 * @returns {Array} - List of participants
 */
function getRegisteredParticipants(eventName) {
    // Placeholder implementation - this should fetch data from a real database
    return [`Participant 1 for ${eventName}`, `Participant 2 for ${eventName}`];
}

/**
 * Cancel registration for an event
 * @param {string} eventName - The name of the event
 * @param {string} userName - The name of the user cancelling
 * @returns {string} - Cancellation message
 */
function cancelRegistration(eventName, userName) {
    return `User ${userName} has cancelled their registration for the event: ${eventName}`;
}