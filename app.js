    // Get the dropzone, player, filename, message, rewind, fastforward, and fileinput elements
    const dropzone = document.querySelector('#dropzone');
    const player = document.querySelector('#player');
    const filename = document.querySelector('#filename');
    const message = document.querySelector('#message');
    const rewind = document.querySelector('#rewind');
    const fastforward = document.querySelector('#fastforward');
    const fileinput = document.querySelector('#fileinput');

    // Prevent the default behavior for dragover and drop events on the document
    document.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    document.addEventListener('drop', (event) => {
      event.preventDefault();
    });

    // Handle the dragover event for the dropzone
    dropzone.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    // Handle the drop event for the dropzone
    dropzone.addEventListener('drop', (event) => {
      event.preventDefault();

      // Get the dropped file
      const file = event.dataTransfer.files[0];

      // Check if the file is an audio file
      if (file.type.startsWith('audio/')) {
        // Clear any previous messages
        message.textContent = "";

        // Display the file name without the extension
        filename.textContent = file.name.replace(/\.[^/.]+$/, "");

        // Create a file reader
        const reader = new FileReader();
        reader.onload = (event) => {
          // Set the audio source and play the file at 33rpm
          player.src = event.target.result;
          player.playbackRate = 0.75;
          player.play();
        };
        reader.readAsDataURL(file);
      } else {
        // Display a message to the user
        message.textContent = "Sorry, the type of file you are trying to load cannot be played in this player.";
      }
    });

    // Handle the change event for the file input
    fileinput.addEventListener('change', (event) => {
      // Get the selected file
      const file = event.target.files[0];

      // Check if the file is an audio file
      if (file.type.startsWith('audio/')) {
        // Clear any previous messages
        message.textContent = "";

        // Display the file name without the extension
        filename.textContent = file.name.replace(/\.[^/.]+$/, "");

        // Create a file reader
        const reader = new FileReader();
        reader.onload = (event) => {
          // Set the audio source and play the file at 33rpm
          player.src = event.target.result;
          player.playbackRate = 0.75;
          player.play();
        };
        reader.readAsDataURL(file);
      } else {
        // Display a message to the user
        message.textContent = "Sorry, the type of file you are trying to load cannot be played in this player.";
      }
    });

    // Handle the click event for the rewind button
    rewind.addEventListener('click', () => {
      player.currentTime -= 10;
    });

    // Handle the click event for the fastforward button
    fastforward.addEventListener('click', () => {
      player.currentTime += 10;
    });