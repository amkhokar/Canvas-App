var run = Pts.quickStart("#pt", "white");
(function () {

  const stories = {
    //if picked all A side
    Welcome1A: "Pick Kenneth: He is born to be the great ruler and protector of Epicodus. Picking the good side could prevent the prophecy to happen. Tragic adventure awaits for this young man.",
    Chapter1A: "It was said that only the next prince can save Epicodus and stop the prophecy being fulfilled from Ethan's power. The powers of the fate blessed Kenneth with special powers. Each power has special effect. Choose wisely below from the giving options:",
    Chapter1A2A: "LoudMouth: chant cursed words that whoever hears it becomes petrified.",
    Chapter2Narrate: "21 Years have passed and Kenneth grew and became a strong independent person. As a preparation, Dudu made sure his son, Kenneth would grow into a powerful Prince and save Epicodus from the prophecy one day.",
    Chapter2A: "When Kenneth was in a confused situation when he realized that he has to protect Epicodus. He accidentally used loudmouth and killed people. This caused trauma to the civilians resulting into a riot and chaos afterwards. He later then isolated himself from the castle to find his true self and decided that he needs proper training of the mind as well",
    Chapter3A: "He visited the Great Temple of Boujee and trained",
    Chapter3ANarrate: "Along Kenneth’s Journey, he met Nicole and fell in love from 0-100. “I’ve never met a strong beautiful woman like you. You make me feel some type of way.” Nicole live as an average person in Epicodus. She won the jackpot if she’ll marry the future prince of Epicodus. But for Kenneth, his parents’ standards are beyond the expectations. There is no way that they will get married with they approval. Hence, they need to keep the situation private",
    Chapter4Narrate: "As the story comes to an end, the fate of the two must come into conclusion. And the lives of people from Epicodus lies within Kenneth, the supposes protector. Given with his free will he has to choose which path will he lead.",
    Chapter3A4A: "Bring out the Romance!", //choices
    Chapter4A: " Kenneth professed his love to Nicole and asked his father, Dudu for a blessing. The king rejected the offer and has gon crazy to hear the hasty decision. Kenneth and Nicole have been outcasted, breaking the rules of their bloodline and as well as the Kingdom’s commandment",
    Chapter4A5A: "Escape reality and live on your freewill", //choices
    Chapter4A5B: "Fight and be a Hero", //choices
    Chapter5Narrate: "The Prophecy is here! The time has come! The final answer is soon to be known. Will Kenneth break the prophecy? Or will Ethan fulfill it instead?",
    Chapter5A: "The prophecy has come, and the city of Epicodus starts to fall apart. Chaos are everywhere and people are dying. Kenneth felt despair and hopeless and has been swallowed in fear. He fled Epicodus with Nicole. Kenneth failed to save Epicodus and be the Ruler Prince. He relocated to CodeFellows and started a new life with Nicole and leave the past behind. END.",
    //if picked all B from kenneth side

    Chapter1A2B: "CopyPaste: perfect copy of anything he sees",
    //III goes here..
    Chapter2B: "Kenneth made an exact copy of Him in order to protect his own self from dying. The prophecy is being fulfilled now and he needs to do whatever he can to protect his own city.Manning up by doubling him can match up with whoever give threat to the City",
    //V VI and VII goes here..
    Chapter3A4B: "Fight alone",//choices
    Chapter4B: "Kenneth will give his everything in order to protect Epicodus. He prepared long time and put in commitment on his life. He realized no one can stop the prophecy being fulfilled except by him. “I rather destroy myself than build a city again that I had to protect the first place”. Kenneth decided he has to let go of Nicole, in order to protect her as well. He made a perfect copy of him to go with Nicole in order to escape far away from Epicodus. (perfectcopy only lasts for a day).",
    Chapter4B5B: "You made the right path, Bro code on fleek son", //choices
    Chapter5BNarrate: "Epicodus is in the verge of being destroyed, will Kenneth pull the last victory card? Or will Ethan got the last laugh? Choose the proper ending for your own purpose of tragic story",
    Chapter5B1: "Ethan succeeded on bringing down the castle by the help of AJ. When he tried to kill the King he had a confession that shocked him. Dudu told Ethan that he was the long lost brother of Kenneth. He also had the same forsaken love with a villager. They had a kid before getting forced to marry Julie. They gave fruit to a boy named, Ethan and had to keep memories in private. Dudu feared that he will get overthrown if Amkhokar overhear the fragile situation. He casted out his fellow lover away from Epicodus along with Ethan. She later soon died of cancer, which causing Ethan to be adopted by the Foster’s home. Confused and shocked on what he heard. He used all his power to kill the King. The queen intervene but it was already too late. Aj quick enough to grab the queen and struck her between the chest. Now, they head to face the last man standing, Kenneth. They battled fiercely and violently. Causing the city to tremble, sides by sides they rumble.",
    Chapter5B2: "Ethan brought out Nicole he held her hostage before sabotaging the castle. Ethan said 'You’ve been given choices quite a long time, but this time, I CHOSE to choose what to CHOOSE now. There’s only one winner, BROTHER.' Kenneth surrendered to promise not to hurt her. Aj found this perfect opportunity to take down Kenneth, he quickly used his special power. Then Ethan gave the final blow, causing instant fatality for Kenneth. He fulfilled the prophecy and Epicodus is now fallen into his hands.Welcome to the DARK SIDE!",

    //if picked B side
    Welcome1B: "Pick Ethan: He is an adopted son and came from poor family. He has a strong hatred for Epicodus for not being able to help the poor. He wants to take upon revenge and destroy Epicodus.",
    Chapter1B: "The prophecy was called 'Bruhh-kery', where it will bring chaos, famine, disease, and unknown terrors to Epicodus.  They’ve been expecting this to come on the right time. Ethan was also chosen to fulfill the said prophecy, and it blessed him a special power. Choose below:",
    Chapter1B2C: "Chainsmoke: exhales a powerful poisoned fume that causes fatal damage", //choices
    Chapter2CNarrate: "21 Years have passed and Ethan's hatred grew and became a strong malevolent person. He became stronger when he discovered that he can maximize his power by absorbing people’s energy.",
    Chapter2C: "Ethan made a strategic plan on bringing down Epicodus. He thought of poisoning all people in Epicodus so they can feel the pain and the suffering especially for those rich people that never helped the poor, he disgusts them a lot and does not pity nor mercy",
    Chapter3B: "Bring chaos to Epicodus",
    Chapter3BNarrate: "Eversince then Ethan’s been alone  and never had any friends neither family. He came into a realization that, in order to fully destroy Epicodus he needs somebody to pair up with him and somebody who can relate and obey his commands. He later then encountered, a same being with the same passion and insanity as him. He recruited the being named, “AJ”. Whom has the power to tell jokes and whoever hears it, goes insane. He also have a special talent where he can fart out fire.",
    Chapter3B4C: "Bring upon destruction towards Epicodus along with AJ",
    Chapter4C: "Ethan Decided to strike the castle first and bring punishment upon Kenneth’s family. He brought his partner AJ to make things faster and quick",
    //Chapter5BNarrate and Chapter5B goes here

    //if 5C chosen
    Chapter5C1: "Ethan succeeded on bringing down the castle with the help of AJ. When he tried to kill the King, he had a confession that shocked him. Dudu told Ethan that he was the long lost brother of Kenneth. He also had the same forsaken love with a villager. They had a kid before getting forced to marry Julie. They gave fruit to a boy named, Ethan and had to keep memories in private. Dudu feared that he will get overthrown if Amkhokar knows the illegal situation. He casted out his fellow lover away from Epicodus along with Ethan. She later soon died of cancer, which causing Ethan to be adopted by the Foster’s home. Confused and shocked on what he heard. He used all his power to kill the King. The queen intervene but it was already too late. Aj quick enough to grab the queen and struck her between the chest. Before he kills her, AJ hesitated and made her a hostage. Meanwhile, Ethan is almost close to fulfilling the prophecy. And also making Nicole a hostage in current situation.",
    Chapter5C2: "Kenneth is pretty much hopeless, ran out of options to fight. Kenneth, seeing his mom and lover at the same time held hostage is too much sacrifice for him. He knows he cannot save both. Ethan said 'AJ, I have been with you since day one. I will make you my right hand after you finish off Kenneth.'. Aj had flashbacks of his childhood. He has a trauma of being lied to. When he was a kid, he had a best-friend named, Kavod. Him and Kavod have been close friends, for AJ they were. Kavod is a trickster. He likes to make his friends his ‘slave’ by commanding them to do such acts with a promise equivalent to something they would agree to. AJ thought of being controlled like a puppet, like before. He flashes in a speed of light by the maximizing oxygen and bursting it out. He instantly stabbed Ethan’s heart. Ethan then shocked on what just happened. Kenneth found this a perfect opening to protect the Queen and his lover. He used his final maximized power onto AJ.",
    Chapter5C3: "Aj got wiped and the prophecy has been broken. Kenneth successfully protected all his loved ones along the entire Epicodus. Ethan failed unexpectedly, he opened his eyes looks around and found out that Ethan said 'I overslept! I should’ve not watched Fifty Shades 1 and 2 sequel!!' Ethan looks for his phone and message his close friend. To: Kenneth message: 'BRO, SIGN ME IN!'"

  }
  let currentText = stories.Chapter1A;

  let lineCircle = function () {
    var lines = [];
    var createLines = () => {
      lines = [];
      var ps = Create.distributeRandom(space.innerBound, 20);
      for (let i = 0, len = ps.length; i < len; i++) {
        lines.push(new Group(ps[i], ps[i].clone().toAngle(Math.random() * Const.pi, Math.random() * space.size.y / 2 + 20, true)));
      }
    };
    space.add({
      start: (bound) => { createLines(); },
      resize: (bound) => { createLines(); },
      animate: (time, ftime) => {
        // define a range from the pointer
        let range = Circle.fromCenter(space.pointer, 150);
        form.stroke("blue").lines(lines);

        for (let i = 0, len = lines.length; i < len; i++) {

          // check rays and lines intersection with pointer's range
          let inPath = Circle.intersectRay2D(range, lines[i]);
          let inLine = Circle.intersectLine2D(range, lines[i]);

          if (inPath.length > 1) {
            form.stroke("rgba(0,0,0,.15)").line(lines[i].concat(inPath[0], inPath[1]));
            form.stroke("orange").line(lines[i]);
            form.fill("red").points(inPath, 10, "circle");
          }

          if (inLine.length > 0) {
            form.stroke("purple").line(lines[i]);
            form.fill("white").points(inLine, 20, "square");
          }
        }
      }

    });
  }

  let haloCircleFunction = function () {
    run((time, ftime) => {
      let c1 = Circle.fromCenter(space.pointer, space.size.y / 4);
      let c2 = Circle.fromCenter(space.pointer, space.size.y / 6);
      let ct = Circle.fromCenter(space.center, space.size.y / 4);
      let ins1 = Circle.intersectCircle2D(c1, ct);
      form.fill("yellow").circle(c1);
      form.fill("white").circle(c2);
      form.fill("rgba(255,255,255,.2)").circle(ct);
      form.fill("rgba(0,0,0, .3)").points(ins1, 10, "square");
    });
  }

  pick2A = function () {
    currentText = stories.Chapter2A;
    $('#1A-2B').hide();
    $('#1A-2A').hide();
    $('#2B-3A').show();
    space.add({
      animate: (time, ftime) => {
        let size = space.center.$subtract(space.pointer).abs().multiply(2);
        let rect = Rectangle.fromCenter(space.center, size.$max(space.size.$divide(3)));
        form.fill("#fff").stroke("#0ca", 1).rect(rect);
        form.fill("#123");
        form.alignText("center").paragraphBox(rect, stories.Chapter2A, 2.5, "middle");
      }
    });
  }


  pick2B = function () {
    currentText = stories.Chapter2B;
    $('#1A-2B').hide();
    $('#1A-2A').hide();
    $('#2B-3A').show();
    space.add({
      animate: (time, ftime) => {
        let size = space.center.$subtract(space.pointer).abs().multiply(2);
        let rect = Rectangle.fromCenter(space.center, size.$max(space.size.$divide(3)));
        form.fill("#fff").stroke("#0ca", 1).rect(rect);
        form.fill("#123");
        form.alignText("center").paragraphBox(rect, stories.Chapter2B, 2.5, "middle");
      }
    });
  }

  pick3A = function () {
    currentText = stories.Chapter3A;
    $('#2B-3A').hide();
    $('#3A-4A').show();
    $('#3A-4B').show();
    space.add({
      animate: (time, ftime) => {
        let size = space.center.$subtract(space.pointer).abs().multiply(2);
        let rect = Rectangle.fromCenter(space.center, size.$max(space.size.$divide(3)));
        form.fill("#fff").stroke("#0ca", 1).rect(rect);
        form.fill("#123");
        form.alignText("center").paragraphBox(rect, stories.Chapter3A, 2.5, "middle");
      }
    });
  }
  pick4A = function () {
    currentText = stories.Chapter3B;
    $('#3A-4A').hide();
    $('#3A-4B').hide();
    $('#4A-5A').show();
    $('#4A-5B').show();
    space.add({
      animate: (time, ftime) => {
        let size = space.center.$subtract(space.pointer).abs().multiply(2);
        let rect = Rectangle.fromCenter(space.center, size.$max(space.size.$divide(3)));
        form.fill("#fff").stroke("#0ca", 1).rect(rect);
        form.fill("#123");
        form.alignText("center").paragraphBox(rect, stories.Chapter4A, 2.5, "middle");
      }
    });
  }
  pick4B = function () {
    currentText = stories.Chapter4B;
    $('#3A-4A').hide();
    $('#3A-4B').hide();
    $('#4B-5B').show();
    space.add({
      animate: (time, ftime) => {
        let size = space.center.$subtract(space.pointer).abs().multiply(2);
        let rect = Rectangle.fromCenter(space.center, size.$max(space.size.$divide(3)));
        form.fill("#fff").stroke("#0ca", 1).rect(rect);
        form.fill("#123");
        form.alignText("center").paragraphBox(rect, stories.Chapter4B, 2.5, "middle");
      }
    });
  }

  pick5A = function () {
    $('#4A-5B').hide();
    $('#5A').show();
  }

  pick5B = function () {
    $('#4A-5A').hide();
    $('#5B').show();
  }







  // User options for color and shape
  let colorArrayBongo = [`rgba(0,0,0)`, `rgba(0,0,255)`, `rgba(0,255,0)`, `rgba(0,255,255)`, `teal`, `red`];
  let colorArrayBongoTransparent = [`rgba(0,0,0,0.05)`, `rgba(0,0,255,0.05)`, `rgba(0,255,0,0.05)`, `rgba(0,255,255,0.05)`, `rgba(0, 128, 128, 0.05)`, `rgba(255, 0, 0, 0.05)`];
  let colorArrayBongoOpaque = [`rgba(0,0,0)`, `rgba(0,0,255)`, `rgba(0,255,0)`, `rgba(0,255,255)`, `rgba(0, 128, 128)`, `rgba(255, 0, 0)`];
  let shapeArray = ['square', 'circle', 'triangle'];
  let colorShape = function (color = "black", size = 50, shape = "circle", content = stories.chapter1A) {
    if (shape === 'square') {
      space.add((time, ftime) => {
        form.fill(color).point(space.pointer, size);
      });
    } else if (shape === 'triangle') {
      space.add((time, ftime) => {
        form.fill(color).polygon(Triangle.fromCenter(space.pointer, size));
      });
    } else if (shape === 'text') {
      space.add({
        animate: (time, ftime) => {
          let size = space.center.$subtract(space.pointer).abs().multiply(2);
          let rect = Rectangle.fromCenter(space.center, size.$max(space.size.$divide(3)));
          form.fill("#fff").stroke("#0ca", 1).rect(rect);
          form.fill("#123");
          form.alignText("center").paragraphBox(rect, content, 2.5, "middle");
        }

      });
    } else {
      space.add((time, ftime) => {
        form.fill(color).point(space.pointer, size, shape);
      });
    }
  }

  let defaultAnimation = function () {
    colorShape("black", 5, "text", stories.Chapter1A);
    space.resume();

  }
  const SoundPanels = {};
  const MainSong = new Audio("./audio/through.mp3");
  MainSong.loop = true;

  let switchToTransparentWave = function () {
    for (let i = 0; i < colorArrayBongo.length; i++) {
      colorArrayBongo[i] = colorArrayBongoTransparent[i];
    }
  }

  let switchToOpaqueWave = function () {
    for (let i = 0; i < colorArrayBongo.length; i++) {
      colorArrayBongo[i] = colorArrayBongoOpaque[i];
    }
  }

  $(document).ready(function () {
    defaultAnimation();
    space.refresh(false);
    space.bindMouse().bindTouch().play();
    const config = {
      currentShapeIndex: 0,
      size: 10,
      currentAnimationIndex: 0,
      isLensBlank: false,
      isLensEqual: false,
      isLensQ: false,
      isLensW: false,
      isLensE: false,
      isLensR: false,
      isRefresh: false,
      freezeSpeed: 1,
      isFrozen: false
    }

    let clearLens = function () {
      $(".lens").css("border", "1px solid white");
      document.body.className = "";
      config.isLensBlank = false;
      config.isLensEqual = false;
      config.isLensQ = false;
      config.isLensW = false;
      config.isLensE = false;
    }


    SoundPanels["1"] = new SoundPanel({
      removeBlankByDefault: true,
      offset: { x: 0, y: 0 },
      element: document.getElementById("1"),
      highlight: document.getElementById("1"),
      colorString: colorArrayBongo[0],
      control: () => {
        defaultAnimation = function () {
          config.currentAnimationIndex++;
          colorShape(colorArrayBongo[config.currentAnimationIndex % 6], config.size, shapeArray[config.currentShapeIndex % 3]);
        }

        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }
      }
    });
    SoundPanels["2"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("2"),
      highlight: document.getElementById("2"),
      colorString: colorArrayBongo[1],
      control: () => {
        config.size += 20;
        defaultAnimation = function () {
          colorShape(colorArrayBongo[config.currentAnimationIndex % 6], config.size, shapeArray[config.currentShapeIndex % 3]);
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }
      }
    });

    SoundPanels["3"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("3"),
      highlight: document.getElementById("3"),
      colorString: colorArrayBongo[2],
      control: () => {
        config.size -= 20;
        if (config.size < 1) {
          config.size = 10;
        }
        defaultAnimation = function () {
          colorShape(colorArrayBongo[config.currentAnimationIndex % 6], config.size, shapeArray[config.currentShapeIndex % 3]);
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }

      }
    });

    SoundPanels["4"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("4"),
      highlight: document.getElementById("4"),
      colorString: colorArrayBongo[3],
      control: () => {
        config.currentShapeIndex++;
        defaultAnimation = function () {
          colorShape(colorArrayBongo[config.currentAnimationIndex % 6], config.size, shapeArray[config.currentShapeIndex % 3]);
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }

      }
    });

    SoundPanels["5"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("5"),
      highlight: document.getElementById("5"),
      colorString: colorArrayBongo[4],
      control: () => {
        defaultAnimation = function () {
          colorShape(colorArrayBongo[config.currentAnimationIndex % 6], config.size, 'text', currentText)
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }

      }
    });

    SoundPanels["6"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("6"),
      highlight: document.getElementById("6"),
      colorString: colorArrayBongo[5],
      control: () => {
        defaultAnimation = function () {
          haloCircleFunction();
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }

      }
    });

    SoundPanels["7"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("7"),
      highlight: document.getElementById("7"),
      control: () => {
        defaultAnimation = function () {
          lineCircle();
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }

      }
    });
    SoundPanels["8"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("8"),
      highlight: document.getElementById("8"),
      control: () => {
        defaultAnimation = function () {
          haloCircleFunction();
        }
        if (config.isFrozen) {
          space.playOnce(config.freezeSpeed);
        }

      }
    });

    SoundPanels["9"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("9"),
      control: () => {
        space.refresh(!config.isRefresh);
        config.isRefresh = !config.isRefresh;
      },

    });
    SoundPanels["10"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("10"),
      control: () => {
        if (config.isFrozen) {
          space.playOnce(-1);
          document.getElementById("10").style.border = "1px solid white";
        }
        if (!config.isFrozen) {
          space.playOnce(config.freezeSpeed);
          document.getElementById("10").style.border = "1px solid orange";
        }
        config.isFrozen = !config.isFrozen;
      },

    });
    SoundPanels["11"] = new SoundPanel({
      removeBlankByDefault: false,
      element: document.getElementById("11"),
      control: () => {
        if (document.body.classList.contains("eraser")) {
          clearLens();
          document.body.classList.remove("eraser");
          document.getElementById("11").style.border = "1px solid white";
          config.isLensBlank = false;
        } else {
          clearLens();
          document.body.classList.add("eraser");
          document.getElementById("11").style.border = "1px solid violet";
          config.isLensBlank = true;
        }
      },

    });
    SoundPanels["12"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("12"),
      control: () => {
        MainSong.pause();
        space.pause(true);
        document.getElementById("12").classList.remove("unpaused");
        document.getElementById("12").classList.add("paused");
      },
    });
    SoundPanels["13"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("13"),
      control: () => {
        if (document.body.classList.contains("lensEqual")) {
          clearLens();
          config.isLensEqual = false;
        } else {
          clearLens();
          document.getElementById("13").style.border = "1px solid blue";
          document.body.classList.add("lensEqual");
          config.isLensEqual = true;
        }
      },
    });
    SoundPanels["14"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("14"),
      control: () => {
        if (document.body.classList.contains("lensQ")) {
          clearLens();
          config.isLensQ = false;
        } else {
          clearLens();
          document.getElementById("14").style.border = "1px solid blue";
          document.body.classList.add("lensQ");
          config.isLensQ = true;
        }
      },
    });
    SoundPanels["15"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("15"),
      control: () => {
        if (document.body.classList.contains("lensW")) {
          clearLens();
          config.isLensW = false;
        } else {
          clearLens();
          document.getElementById("15").style.border = "1px solid blue";
          document.body.classList.add("lensW");
          config.isLensW = true;
        }
      },
    });
    SoundPanels["16"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("16"),
      control: () => {
        if (document.body.classList.contains("lensE")) {
          clearLens();
          config.isLensE = false;
        } else {
          clearLens();
          document.getElementById("16").style.border = "1px solid blue";
          document.body.classList.add("lensE");
          config.isLensE = true;
        }
      },
    });
    SoundPanels["17"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("17"),
      control: () => {
        if (!config.isLensR) {
          switchToTransparentWave();
          document.getElementById("17").style.border = "1px solid orange";
          config.isLensR = true;
        } else {
          switchToOpaqueWave();
          document.getElementById("17").style.border = "1px solid white";
          config.isLensR = false;
        }
        if (config.isFrozen) {
          space.playOnce(100);
        }
      },
    });
    SoundPanels["18"] = new SoundPanel({
      removeBlankByDefault: true,
      element: document.getElementById("18"),
      highlight: document.getElementById("18"),
      colorString: colorArrayBongo[5],
      control: () => {

        space.clear();
      }
    });

    document.addEventListener("keydown", ({ which }) => {
      const key = keyBindings[which];
      const soundPanel = SoundPanels[key];
      if (!soundPanel) return;
      if (soundPanel.removeBlankByDefault) {
        document.getElementById("11").style.border = "1px solid white";
        document.body.classList.remove("eraser");
        config.isLensBlank = false;
      }
      if (soundPanel.removeBlankByDefault == false) {
        if (config.isLensBlank) {
          document.getElementById("11").style.border = "1px solid white";
          document.body.classList.add("eraser");
          config.isLensBlank = false;
        } else {
          clearLens();
          config.isLensBlank = true;
        }
      }

      if (soundPanel.highlight) highlight(soundPanel.highlight);
      if (soundPanel.control) soundPanel.control();
      if (soundPanel.setText) {
        document.getElementById("change").textContent = soundPanel.setText;
      }
      space.removeAll();
      defaultAnimation();
      update();
    });

    document.addEventListener("keyup", ({ which }) => {
      const key = keyBindings[which];
      const soundPanel = SoundPanels[key];
      if (!soundPanel) return;
      if (soundPanel.highlight) unHighlight(soundPanel.highlight);
    });

  });

  // SoundPanel methods and properties
  const update = () => {
    window.requestAnimationFrame(update);
  };

  highlight = element => {
    element.style.border = "1px solid black";
  };

  unHighlight = element => {
    element.style.border = "1px solid white";
  };

  const playAudio = audio => {
    audio.currentTime = 0;
    audio.play();
  };

  const keyBindings = {
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    48: "10",
    189: "11",
    83: "12",
    187: "13",
    81: "14",
    87: "15",
    69: "16",
    82: "17",
    66: "18"
  };

  class SoundPanel {
    constructor(options) {
      Object.assign(this, options);
    }
  }

})();