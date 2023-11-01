Blockly.JavaScript['animationplay'] = function(block) {
  var dropdown_animationclip = block.getFieldValue('AnimationClip');
  var dropdown_bodypart = block.getFieldValue('BodyPart');
  var value_overlap = Blockly.JavaScript.valueToCode(block, 'Overlap',  Blockly.JavaScript.ORDER_ATOMIC);
  var combinedValues = `animator.Play ${dropdown_animationclip} ${dropdown_bodypart} ${value_overlap}`;
  // TODO: Assemble javascript into code variable.
  var code = 'mqtt_client.publish("YourTopic/class/Alex2", "'+combinedValues+'");\n';  
  return code;
};