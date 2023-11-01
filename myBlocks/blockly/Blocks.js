Blockly.Blocks['animationplay'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Play");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("AnimationClip")
          .appendField(new Blockly.FieldDropdown([["Idle","Idle"], ["Clap","Clap"], ["Good","Good"], ["Like","Like"], ["Introduce","Introduce"], ["Point","Point"], ["Think","Think"], ["WaveHand","WaveHand"], ["Jumping","Jumping"], ["FistPump","FistPump"], ["ThumbsUp","ThumbsUp"]]), "AnimationClip");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("BodyPart")
          .appendField(new Blockly.FieldDropdown([["FullBody","FullBody"], ["UpperBody","UpperBody"], ["LowerBody","LowerBody"], ["LeftArm","LeftArm"], ["RightArm","RightArm"], ["LeftHand","LeftHand"], ["RightHand","RightHand"]]), "BodyPart");
      this.appendValueInput("Overlap")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("Overlap");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("sec");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };