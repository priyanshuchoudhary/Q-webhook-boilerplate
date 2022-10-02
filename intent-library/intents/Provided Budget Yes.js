module.exports = async (df) => {
    //const uniqueId = Math.floor(Math.random()*10000000);
    //console.log("==============================="+uniqueId);

    //df.setOutputContext('global',50,{"bookingId":uniqueId);
    const uniqueId = df.getContext('global').parameters.uniqueId

    df.setResponseText(`Awesome, Your hotel is booked. Your booking id is: ${uniqueId}. Is there anything else I can help you with?`)
}




