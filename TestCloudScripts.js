handlers.RunSampleScript = function (params) {
  var message = "This is a sample message.";
  return { messageValue: message };
};

handlers.SetUserReadonlyData = function (params) {
  var result = server.UpdateUserReadOnlyData({
    PlayFabId: currentPlayerId,
    Data: params.data
  });
  return result;
};

handlers.GetAllUserReadOnlyData = function (params) {
  var result = server.GetUserReadOnlyData({ 
    PlayFabId: currentPlayerId 
  });
  return result;
};
