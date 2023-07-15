
// Calling elements
$(document).ready(function() {
  const saveButton = $(".saveBtn");
  const currentDayElement = $("#currentDay");
  const currentDate = dayjs().format("dddd/D/M/YYYY");
  var currentHour = new Date().getHours();
  var scheduleContainer = $("#schedule-container");
  currentDayElement.text(currentDate);

  function updateContainerColors() {
    var currentHour = new Date().getHours();

    // Move hour values to  container
    for (var hour = 9; hour <= 17; hour++) {
      var container = $("#hour-" + hour);

      // assign class to container
      if (hour < currentHour) {
        container.removeClass("present future").addClass("past");
      } else if (hour === currentHour) {
        container.removeClass("past future").addClass("present");
      } else {
        container.removeClass("past present").addClass("future");
      }
    }
  }

  updateContainerColors();

 // Saving data and replace container hour, obtain input text  and save on localStorage

  saveButton.on("click", function() {
    var hour = $(this).parent().attr("id").replace("hour-", "");
    var textArea = $(this).siblings(".description");
    var text = textArea.val();

    // Guardar el texto en localStorage
    localStorage.setItem(hour, text);
  });

  // Load saved data 
  function loadSavedData() {
    for (var hour = 9; hour <= 17; hour++) {
      var text = localStorage.getItem(hour);
      if (text) {
        $("#hour-" + hour + " .description").val(text);
      }
    }
  }

  loadSavedData();
});
